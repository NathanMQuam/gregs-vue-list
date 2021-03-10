<template>
  <div class="jobs-page container">
    <div class="row">
      <div class="col text-center">
        <h1>Jobs</h1>
      </div>
    </div>
    <div class="row my-3">
      <form class="form-inline" @submit.prevent="createJob">
        <div class="form-group">
          <input
            type="text"
            name="make"
            id="make"
            class="form-control"
            placeholder="Make"
            aria-describedby="helpId"
            v-model="state.newJob.make"
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
            v-model="state.newJob.model"
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
            v-model="state.newJob.year"
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
            v-model="state.newJob.price"
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
            v-model="state.newJob.description"
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
            v-model="state.newJob.imgUrl"
          />
        </div>
        <button class="btn btn-info" type="submit">Create</button>
      </form>
    </div>
    <div class="row">
      <Job v-for="jobData in state.jobs" :key="jobData._id" :job="jobData" />
    </div>
  </div>
</template>

<script>
import { reactive, computed, onMounted } from 'vue'
import { AppState } from '../Appstate'
import { jobsService } from '../services/JobsService'
import Job from '../components/Job'
import { useRouter } from 'vue-router'

export default {
  name: 'JobsPage',
  setup() {
    const router = useRouter()
    const state = reactive({
      jobs: computed(() => AppState.jobs),
      newJob: {}
    })
    // NOTE this runs when the page/component is first 'mounted' to the dom
    onMounted(() => {
      jobsService.getJobs()
    })

    return {
      state,
      async createJob() {
        const jobId = await jobsService.createJob(state.newJob)
        router.push({ name: 'JobDetails', params: { id: jobId } })
        state.newJob = {}
      }
    }
  },
  components: {
    Job
  }
}
</script>

<style scoped>
</style>
