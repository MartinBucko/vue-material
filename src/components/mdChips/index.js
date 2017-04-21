import mdChips from './mdChips.vue';
import mdChip from './mdChip.vue';
import mdChipsAutocomplete from './mdChipsAutocomplete.vue';
import mdChipsTheme from './mdChips.theme';

export default function install(Vue) {
  Vue.component('md-chips', mdChips);
  Vue.component('md-chips-autocomplete', mdChipsAutocomplete);
  Vue.component('md-chip', mdChip);

  Vue.material.styles.push(mdChipsTheme);
}
