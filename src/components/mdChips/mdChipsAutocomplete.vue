<template lang="html">
  <div class="md-chips md-chips-autocomplete"
    :class="[themeClass, classes]"
    @focus="onFocus"
    @blur="onBlur">
    <md-chip
      v-for="chip in selectedChips"
      :md-deletable="!mdStatic"
      :disabled="disabled"
      @delete="deleteChip(chip)">
      <span v-text="chip[printAttribute]"></span>
      <!--<slot :value="chip"></slot>-->
    </md-chip>

    <md-autocomplete
      v-model="currentChip"
      ref="autocomplete"
      :debounce="debounce"
      :disabled="disabled"
      :required="required"
      :list="list"
      :filterList="filterList"
      :placeholder="mdInputPlaceholder"
      :id="inputId"
      :fetch="fetch"
      :prepareResponseData="prepareResponseData"
      :printAttribute="printAttribute"
      :queryParam="queryParam"
      @keydown.enter.stop="addChip"
      @selected="addChip"/>
  </div>
</template>

<script>
  import autocompleteCommon from '../../core/utils/autocomplete-common';
  import getClosestVueParent from '../../core/utils/getClosestVueParent';
  import theme from '../../core/components/mdTheme/mixin';
  import uniqueId from '../../core/utils/uniqueId';

  export default {
    props: {
      mdInputId: String,
      mdInputName: String,
      mdInputPlaceholder: String,
      mdInputType: {
        type: String,
        default: 'text'
      },
      mdMax: {
        type: Number,
        default: Infinity
      },
      mdStatic: Boolean,
      value: Array
    },
    mixins: [theme, autocompleteCommon],
    data() {
      return {
        currentChip: '',
        inputId: this.mdInputId || `chips-${uniqueId()}`,
        selectedChips: this.value,
        parentContainer: null
      };
    },
    computed: {
      classes() {
        return {
          'md-static': this.mdStatic,
          'md-disabled': this.disabled
        };
      },
      hasReachedMaxSize() {
        return this.selectedChips && this.selectedChips.length === this.mdMax;
      }
    },
    methods: {
      addChip(selected = null) {
        if (!this.hasReachedMaxSize) {
          const value = selected ||
            { [this.printAttribute]: this.currentChip.trim() };

          if (this.selectedChips.indexOf(value) < 0) {
            this.selectedChips.push(value);
            this.currentChip = null;
            this.$emit('input', this.selectedChips);
            this.$emit('change', this.selectedChips);
            this.applyAutocompleteFocus();
          }
        }
      },
      applyAutocompleteFocus() {
        this.$nextTick(() => {
          this.$refs.autocomplete.onFocus();
        });
      },
      deleteChip(chip) {
        let index = this.selectedChips.indexOf(chip);

        if (index >= 0) {
          this.selectedChips.splice(index, 1);
        }

        this.$emit('change', this.selectedChips);
        this.applyAutocompleteFocus();
      },
      deleteLastChip() {
        if (!this.currentChip) {
          this.selectedChips.pop();
          this.$emit('change', this.selectedChips);
          this.applyAutocompleteFocus();
        }
      },
      onFocus() {
        if (this.parentContainer) {
          this.parentContainer.isFocused = true;
        }
        this.$refs.autocomplete.onFocus();
      },
      onInput() {
        this.updateValues();
        // this.$emit('change', this.$refs.input.value);
        // this.$emit('input', this.$refs.input.value);
        // this.$emit('selected', this.selected, this.$refs.input.value);
      },
      onBlur() {
        this.parentContainer.isFocused = false;
        // this.setParentValue();
      },
      verifyProps() {
        if (!this.parentContainer) {
          return this.throwErrorDestroy('You should wrap the md-input in a md-input-container');
        } else if (!this.listIsEmpty && this.filterList) {
          return this.throwErrorDestroy('You should use a `filterList` function prop with the `list` prop');
        } else if (!this.fetch) {
          return this.throwErrorDestroy('You should use a `fetch` function prop');
        }
      },
      throwErrorDestroy(errorMessage) {
        this.$destroy();
        throw new Error(errorMessage);
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.parentContainer = getClosestVueParent(this.$parent, 'md-input-container');

        if (!this.listIsEmpty) {
          this.items = Object.assign([], this.list);
        }

        // this.query = this.value;

        // this.verifyProps();

        // this.setParentDisabled();
        // this.setParentRequired();
        // this.setParentPlaceholder();
        // this.handleMaxLength();
        // this.updateValues();
      });
    }
  };
</script>

<style lang="scss">
</style>
