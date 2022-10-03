<template>
  <div class="cart-body">
    <img
      :src="
        'https://firebasestorage.googleapis.com/v0/b/project-e1831.appspot.com/o/restaurants%2F' +
        restaurant.id +
        '%2F' +
        item.image +
        '?alt=media'
      "
    /><br /><br />
    <b>{{ item.name }}</b>
    <hr />
    <div class="card">
      Additional Requuest <br />
      <input class="input" type="text" v-model="comments" />
      <div class="footer">
        <button class="button" type="button" v-on:click="minus()">
          <center><i class="glyphicon glyphicon-minus"></i></center>
        </button>
        <b>{{ counter }}</b>
        <button class="button" type="button" v-on:click="increase()">
          <center><i class="glyphicon glyphicon-plus"></i></center></button
        ><br /><br />
        <button class="submit" v-on:click="add()">
          Add to Cart -
          {{ (this.total = this.item.price * this.counter) }}</button
        ><br /><br />
      </div>
    </div>
  </div>
</template>
<script>
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/db";
import { useOrder } from "../../store";

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
  name: "MyComponent",
  props: ["slug", "itemSlug"],
  data: function () {
    return {
      counter: 1,
      restaurant: { name: "-" },
      item: { name: "-", image: "-", price: 0 },
      tableNumber: 0,
      comments: " ",
      total: 0,
    };
  },
  setup() {
    const orderStore = useOrder();
    return { orderStore };
  },
  methods: {
    increase: function () {
      this.counter++;
    },
    minus: function () {
      this.counter--;
      if (this.counter <= 1) {
        this.counter = 1;
      }
    },
    add: function () {
      this.orderStore.addItem(
        this.itemSlug,
        this.counter,
        this.comments,
        this.item.name,
        this.item.price,
        this.total
      );
      this.$router.push({
        name: "OrderPage",
        params: { slug: this.slug },
        query: { table: this.tableNumber },
      });
    },
  },
  async mounted() {
    this.restaurant = await getRestaurant(this.slug);
    this.item = this.restaurant.menu.find(
      (item) => item.slug === this.itemSlug
    );
    this.tableNumber = this.$route.query.table;
  },
};
</script>

<style scoped>
img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}
i {
  color: #062807;
}
hr {
  border-top: 4px solid rgb(235, 230, 230);
  margin-top: 7px;
}
</style>