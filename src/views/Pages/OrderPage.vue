<template>
  <div class="body">
    <h4>
      <div class="head">{{ restaurant.name }} Table: {{ tableNumber }}</div>
    </h4>
    <hr />
    <div class="card">
      <div class="box">
        <div class="box-1">My Order</div>
        <div class="box-2" style="color: #0b55c5">
          <router-link
            :to="{
              name: 'MenuPage',
              params: { slug: this.slug },
              query: { table: this.tableNumber },
            }"
            >Add Items
          </router-link>
        </div>
        <br /><br />
        <div v-for="item in items" :key="item.slug">
          <table
          >
            <tr>
              <td class="b">{{ item.quantity }}x</td>
              <td style="table-layout: fixed; width: 100%;">
                <p>
                  {{ item.name }}
                </p>
                <p style="color: grey">
                  {{ item.comments }}
                </p>
                <p>
                  <button
                    class="button1"
                    v-on:click="del(index)"
                    style="color: red; background: white"
                  >
                    delete
                  </button>
                </p>
              </td>
              <td class="box-2">
                {{ item.total }}
              </td>
            </tr>
          </table>
          <hr class="hr" />
        </div>
        <div class="box-1">Total</div>
        <div class="box-2">{{ total() }}฿</div>
      </div>
      <div class="footer">
        <br />
        <div class="box-1">Total</div>
        <div class="box-2">{{ total() }}฿</div>
        <br /><br />
        <button class="submit" v-on:click="add()">Now</button><br /><br />
      </div>
    </div>
  </div>
</template>
<script>
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/db";
import { useOrder } from "../../store";
import { mapState } from "pinia";

async function getRestaurant(slug) {
  const q = query(collection(db, "restaurants"), where("slug", "==", slug));
  const querySnapshot = await getDocs(q);
  if (querySnapshot.empty) {
    return { name: "", slug, menu: [] };
  }
  const doc = querySnapshot.docs[0];
  return { id: doc.id, ...doc.data() };
}

export default {
  props: ["slug", "itemSlug"],
  data: function () {
    return {
      restaurant: { name: "-" },
      tableNumber: 0,
    };
  },
  async mounted() {
    this.restaurant = await getRestaurant(this.slug);
    this.tableNumber = this.$route.query.table;
  },
  computed: {
    ...mapState(useOrder, ["items"]),
  },
  methods: {
    total: function () {
      let sum = 0;
      this.items.forEach(function (item) {
        sum += item.total;
      });
      return sum;
    },
    del(index) {
      this.items.splice(index, 1);
    },
  },
};
</script>

<style scoped>
table {
  table-layout: auto;
}
.button1 {
  border: none;
  border-radius: 25%;
  background-color: rgb(231, 231, 235);
}
hr {
  border-top: 3px solid lightgray;
}

.box-1 {
  float: left;
  font-weight: bold;
}
.box-2 {
  float: right;
  text-align: right;
  font-weight: bold;
}
.hr {
  height: 0.5px;
  background: #eeeced;
  font-size: 0;
  border: 0;
  margin-top: -2px;
}
.b {
  border: solid 2px rgb(199, 201, 199);
  padding: 6px;
  display: inline-block;
  border-radius: 15%;
  font-size: 14px;
}
td {
  padding-bottom: 0px;
  padding-left: 10px;
  padding-top: 0px;
  text-align: left;
  font-style: normal;
}
p {
  margin-top: -5px;
}
</style>