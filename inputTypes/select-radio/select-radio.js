Template.afRadioGroup_materialize.helpers({
  dsk:      Utility.helpers.dsk,
  itemAtts: _.compose(function(atts) {
    if (this.selected) {
      atts.checked = '';
    }
    return atts;
  }, Utility.helpers.itemAttsWithUniqId)
});
