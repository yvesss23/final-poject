<template>
  <div>
    <h1>{{ restaurant.name }}</h1>
    <h2>Table: {{ tableNumber }}</h2>
    <router-link :to="{ name: 'MenuPage', query: { table: tableNumber } }">Menu</router-link>
  </div>
</template>
<script>
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/db";

async function getRestaurant(slug) {
  const q = query(collection(db, "restaurants"), where("slug", "==", slug))
  const querySnapshot = await getDocs(q)
  if (querySnapshot.empty) {
    return { name: '', slug, menu: [] }
  }
  const doc = querySnapshot.docs[0]
  return { id: doc.id, ...doc.data() }
}

export default {
  props: ["slug"],
  data() {
    return {
      restaurant: { name: '-' },
      tableNumber: 0
    }
  },
  async mounted() {
    this.restaurant = await getRestaurant(this.slug)
    this.tableNumber = this.$route.query.table
  }
};
</script>
