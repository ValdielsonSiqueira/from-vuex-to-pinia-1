<script>
import EventCard from '../components/EventCard.vue'
import { useEventStore } from '../stores/EventStore.js';

export default {
  setup() {
    const eventStore = useEventStore();

    return {
      eventStore
    }
  },
  components: {
    EventCard
  },
  created() {
    this.eventStore.fetchEvents().catch(error => {
      this.$router.push({
        name: 'ErrorDisplay',
        params: { error: error }
      })
    })
    
    //Declaração da action com vuex, sem mapActions
    // this.$store.dispatch('fetchEvents').catch(error => {
    //   this.$router.push({
    //     name: 'ErrorDisplay',
    //     params: { error: error }
    //   })
    // })
  },
  // computed: {
  //   events() {
  //     return this.$store.state.events
  //   }
  // }
}
</script>

<template>
  <h1>Events for Good</h1>
  <div class="events">
    <EventCard v-for="event in eventStore.events" :key="event.id" :event="event" />
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
