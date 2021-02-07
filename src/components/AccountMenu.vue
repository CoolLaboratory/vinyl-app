<template>
<div class="mdc-menu-surface--anchor">
  <button class="icon_button" @click="openMenu" v-html="icon"></button>

  <div ref="menu" class="mdc-menu mdc-menu-surface">
    <AccountList />
  </div>
</div>
</template>

<script>
import {MDCMenu} from '@material/menu';
import AccountList from "@/components/AccountList.vue";
import { ACCOUNT_ICON } from '@/icons'

export default {
  name: 'AccountMenu',
  data: () => ({
    /**  @type {MDCMenu} menuEl */
    menuEl: null,
    icon: ACCOUNT_ICON
  }),
  components: { AccountList }, 
  mounted() { 
    this.menuEl = new MDCMenu(this.$refs.menu) 
       
  },
  unmounted() { this.menuEl.destroy() },
  methods: {
    openMenu() { this.menuEl.open = this.opened = true; }
  }
}
</script>

<style lang="scss" scoped>
</style>
