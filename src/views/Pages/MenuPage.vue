<template>
  <div class="card-body">
    <div class="head" >{{ restaurant.name }} Table: {{ tableNumber }}</div><br/><br/>
    <div v-for="menu in restaurant.menu" :key="menu.id">
      <router-link :to="{ name: 'AddtoCartPage', params: { slug: slug, itemSlug: menu.slug ?? 'unknown' } , query: { table: tableNumber } }">
      <table>
        <tr>
          <td>
            <img
              :src="
                'https://firebasestorage.googleapis.com/v0/b/project-e1831.appspot.com/o/restaurants%2F' +
                restaurant.id +
                '%2F' +
                menu.image +
                '?alt=media'
              "
            />
          </td>
          <td>
            <p style="color: black;">
              {{ menu.name }}
            </p>
            <p>
              <b> {{ menu.price }} ฿</b>
            </p>
            
          </td>
        </tr>
      </table>
      </router-link>
      <hr />
    </div>
    
    </div>
</template>
<script>
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/db";

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
  props: ["slug"],
  data() {
    return {
      restaurant: { name: "-" },
      tableNumber: 0,
    };
  },
  async mounted() {
    this.restaurant = await getRestaurant(this.slug);
    this.tableNumber = this.$route.query.table;
  },
};
</script>
<style scoped>
b {
  color: rgb(27, 177, 7);
  font-weight: 1000px;
}
img {
  width: 100px;
  height: 80px;
  border-radius: 15px;
  object-fit: cover;
}
td {
  padding-bottom: 10px;
  padding-left: 10px;
  padding-top: 10px;
  text-align: left;
  font-style: normal;
}
hr {
  height: 0.5px;
  background: #eeeced;
  font-size: 0;
  border: 0;
  margin-top:2px ;
}
i{
color:rgb(16, 234, 67);
padding-left: 10px;
padding-top:10px ;
font-size:30px;
position: fixed;
}

</style>