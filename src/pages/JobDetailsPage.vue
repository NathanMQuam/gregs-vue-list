<template>
  <div class="job-details">
    <h1>WElcome to the details page</h1>
    {{ state.job }}
    <button type="button" class="btn btn-outline-danger" @click="deleteJob">
      Delete Job
    </button>

    <form class="form-inline" onsubmit="app.jobsController.createJob(event)">
      <div class="form-group">
        <input
          type="text"
          name="make"
          id="make"
          class="form-control"
          placeholder="Make"
          aria-describedby="helpId"
          v-model="state.job.make"
        />
      </div>
      <div class="form-group">
        <input
          type="text"
          name="model"
          id="model"
          class="form-control"
          placeholder="Model"
          aria-describedby="helpId"
          v-model="state.job.model"
        />
      </div>
      <div class="form-group">
        <input
          type="number"
          name="year"
          id="year"
          class="form-control"
          placeholder="Year"
          aria-describedby="helpId"
          v-model="state.job.year"
        />
      </div>
      <div class="form-group">
        <input
          type="number"
          name="price"
          id="price"
          class="form-control"
          placeholder="Price"
          aria-describedby="helpId"
          v-model="state.job.price"
        />
      </div>
      <div class="form-group">
        <input
          type="text"
          name="description"
          id="description"
          class="form-control"
          placeholder="Description"
          aria-describedby="helpId"
          v-model="state.job.description"
        />
      </div>
      <div class="form-group">
        <input
          type="text"
          name="imgUrl"
          id="imgUrl"
          class="form-control"
          placeholder="ImgUrl"
          aria-describedby="helpId"
          v-model="state.job.imgUrl"
        />
      </div>
      <button class="btn btn-info" type="submit">Create</button>
    </form>
  </div>
</template>

<script>
import { onMounted, reactive, computed } from 'vue'
import { onBeforeRouteLeave, useRoute, useRouter } from 'vue-router'
import { jobsService } from '../services/JobsService'
import { AppState } from '../Appstate'

export default {
  name: 'JobDetails',
  setup() {
    const route = useRoute()
    const router = useRouter()
    const state = reactive({
      job: computed(() => AppState.activeJob)
    })

    onMounted(() => {
      jobsService.getJob(route.params.id)
    })

    onBeforeRouteLeave((to, from, next) => {
      if (window.confirm('You sure bro?')) {
        AppState.activeJob = {}
        next()
      }
    })

    return {
      route,
      state,
      async deleteJob() {
        await jobsService.deleteJob(state.job._id)
        router.push({ name: 'Jobs' })
      }
    }
  },
  components: {}
}
</script>

<style scoped>
</style>
