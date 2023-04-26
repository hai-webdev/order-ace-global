<template>
  <div class="contact-container">
    <Banner :src="bannerSrc" :title="bannerTitle" :inner="true" />
    <main class="content">
      <div class="center">
        <div class="left-layout">
          <div class="info-box">
            <div class="address">
              <div class="title">Address</div>
              <div
                class="info"
                v-html="
                  company.address && company.address.replace(/\n|\r/, '<br>')
                "
              ></div>
            </div>
            <div class="email">
              <div class="title">Email</div>
              <div class="info">
                <a :href="'mailto:' + company.email">{{ company.email }}</a>
              </div>
            </div>
            <div class="email">
              <div class="title">Tel</div>
              <div class="info">
                <a :href="'tel:' + company.mobile">{{ company.mobile }}</a>
              </div>
            </div>
          </div>
        </div>
        <div class="right-layout">
          <div class="title">Message</div>
          <form class="form-wrapper" @submit.prevent="formSubmit">
            <label for="">
              <p>Name *</p>
              <input
                type="text"
                v-model="form.name"
                :class="{ error: error.name }"
              />
              <div class="error-text" v-if="error.name">
                Name cannot be empty!
              </div>
            </label>
            <label for="">
              <p>Email *</p>
              <input
                type="text"
                v-model="form.email"
                :class="{ error: error.email }"
              />
              <div class="error-text" v-if="error.email">
                Email cannot be empty!
              </div>
            </label>
            <label for="">
              <p>Subject *</p>
              <input
                type="text"
                v-model="form.subject"
                :class="{ error: error.subject }"
              />
              <div class="error-text" v-if="error.subject">
                Subject cannot be empty!
              </div>
            </label>
            <label for="">
              <p>Message *</p>
              <textarea
                :class="{ error: error.message }"
                cols="30"
                rows="10"
                v-model="form.message"
              ></textarea>
              <div class="error-text" v-if="error.message">
                Message cannot be empty!
              </div>
            </label>
            <button type="submit" class="more-btn">Submit</button>
          </form>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Banner from "@/components/Banner";
import BannerMixin from "@/mixins/banner";
import { mapState } from "vuex";
import postMsg from "@/api/postMsg";
export default {
  mixins: [BannerMixin()],
  components: {
    Banner,
  },
  data() {
    return {
      form: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
      error: {
        name: false,
        email: false,
        subject: false,
        message: false,
      },
      errNum: 0,
    };
  },
  created() {
    this.$store.dispatch("site/getCompany");
  },
  computed: {
    ...mapState({
      company: (state) => state.site.company,
    }),
  },
  methods: {
    async formSubmit() {
      this.errNum = 0;
      for (const k in this.error) {
        if (Object.hasOwnProperty.call(this.error, k)) {
          this.error[k] = false;
        }
      }
      for (const k in this.form) {
        if (Object.hasOwnProperty.call(this.form, k)) {
          const el = this.form[k];
          if (!el) {
            this.error[k] = true;
            this.errNum++;
          }
        }
      }
      if (!this.errNum) {
        const resp = await postMsg(this.form);
        if (resp.data) {
          this.$message({
            message: resp.data,
            type: "success",
          });
        }
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
@import "~@/styles/mixins.less";
@import "./index.less";
@import "./1080.less" screen and (max-width:1080px);
@import "./768.less" screen and (max-width:768px);
</style>