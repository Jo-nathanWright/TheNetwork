<template>
  <div class="row justify-content-center">
    <div class="col-md-11 mt-3 bg-white">
      <div class="row py-3">
        <div class="col-md-12 text-center">
          <img class="rounded" :src="profile.coverImg" alt="Profile Image" width="1000">
        </div>
        <div class="col-md-2 pt-3">
          <img class="rounded" :src="profile.picture" alt="Profile Image" width="150">
        </div>
        <div class="col-md-1 offset-md-7 pt-3">
          <a :href="profile.github">🐱</a>
        </div>
        <div class="col-md-1 pt-3">
          <a :href="profile.linkedin"><b>In</b></a>
        </div>
        <div class="col-md-1 pt-3">
          <a :href="profile.resume">📄</a>
        </div>
      </div>
      <div class="col-md-4">
        <h6>{{ profile.class }}</h6>
        <h5>{{ profile.name }}</h5>
        <div v-if="profile.graduated === true">
          🎓
        </div>
        <p class="col-md-11 pt-3">
          {{ profile.bio }}
        </p>
      </div>
      <div v-if="account.id === profile.id" class="col-md-12 d-flex justify-content-end pb-3">
        <button type="button" class="btn btn-dark" data-toggle="modal" data-target="#exampleModal">
          Edit Account
        </button>

        <!-- Modal -->
        <div class="modal fade"
             id="exampleModal"
             tabindex="-1"
             role="dialog"
             aria-labelledby="exampleModalLabel"
             aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Your New Account Info
                </h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div class="post-form from-row">
                  <form>
                    <div class="form-row">
                      <div class="form-group col-md-4">
                        <label for="name">Username</label>
                        <input type="text" v-model="state.profile.name" class="form-control" id="name" placeholder="Username...">
                      </div>
                      <div class="form-group col-md-3">
                        <label for="class">Class</label>
                        <input type="text" v-model="state.profile.class" class="form-control" id="class" placeholder="Your Class...">
                      </div>
                      <div class="form-group col-md-5">
                        <label for="email">Email</label>
                        <input type="email" v-model="state.profile.email" class="form-control" id="email" placeholder="Your Email...">
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="bio">Bio</label>
                      <input type="text" v-model="state.profile.bio" class="form-control" id="bio" placeholder="Tell us About you...">
                    </div>
                    <div class="form-group">
                      <label for="profileImg">Profile Picture</label>
                      <input type="text" v-model="state.profile.picture" class="form-control" id="profileImg" placeholder="Your new look...">
                    </div>
                    <div class="form-group">
                      <label for="coverImg">Cover Picture</label>
                      <input type="text" v-model="state.profile.coverImg" class="form-control" id="coverImg" placeholder="Your new background image...">
                    </div>
                    <div class="form-row">
                      <div class="form-group col-md-4">
                        <label for="github">Github</label>
                        <input type="text" v-model="state.profile.github" class="form-control" id="github" placeholder="Your Github...">
                      </div>
                      <div class="form-group col-md-4">
                        <label for="linkedIn">LinkedIn</label>
                        <input type="text" v-model="state.profile.linkedin" class="form-control" id="linkedIn" placeholder="Your LinkedIn...">
                      </div>
                      <div class="form-group col-md-4">
                        <label for="resume">Resume</label>
                        <input type="text" v-model="state.profile.resume" class="form-control" id="resume" placeholder="Your Resume...">
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">
                  Close
                </button>
                <button type="button" class="btn btn-primary" @click="editProfile">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div>
    <PostsThread :post="post" />
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { reactive } from '@vue/reactivity'
import { AppState } from '../AppState'
import Pop from '../utils/Notifier'
import { profileService } from '../services/ProfileService'
import PostsThread from '../components/PostsThread.vue'
import { logger } from '../utils/Logger'
import { accountService } from '../services/AccountService'
import { useRoute } from 'vue-router'
export default {
  props: {
    user: {
      type: Object,
      required: true
    },
    account: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const route = useRoute()
    onMounted(async() => {
      try {
        await profileService.getPostsByProfile(route.params.id)
      } catch (error) {
        logger.log(error, 'error')
      }
    })
    const state = reactive({
      profile: {}
    })
    return {
      state,
      profile: computed(() => AppState.singleProfile),
      post: computed(() => AppState.singlePost),
      async getPosts() {
        try {
          await profileService.getPostsByProfile(route.params.id)
          logger.log('This is the Appstate', AppState.singleProfile)
        } catch (error) {
          Pop.toast(error, 'error')
        }
      },
      async editProfile() {
        try {
          await accountService.editAccount(state.profile)
          await profileService.getProfileById(props.user.id)
          state.profile = {}
        } catch (error) {
          Pop.toast(error, 'error')
        }
      }
    }
  },
  components: {
    PostsThread
  }
}
</script>
