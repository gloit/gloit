TaggingSelect2 = Ember.TextField.extend
  classNames: ['gc-tagging-select2']

  tags: []
  placeholder: '请选择...'
  allowClear: true
  closeOnSelect: true
  minimumInputLength: 0
  maximumSelectionSize: 0
  tokenSeparators: [",", " ", ";", "，", "；"]

  didInsertElement: ->
    Ember.run.scheduleOnce('afterRender', this, 'processChildElements')

  processChildElements: ->
    options =
      placeholder:   @get('placeholder')
      allowClear:    @get('allowClear')
      closeOnSelect: @get('closeOnSelect')
      tags:          @get('tags') || []
      tokenSeparators:      @get('tokenSeparators')
      minimumInputLength:   @get('minimumInputLength')
      maximumSelectionSize: @get('maximumSelectionSize')

    @$().select2(options)

  willDestroyElement: ->
    @$().select2("destroy")

  resetSelection: (->
    @processChildElements() unless Ember.isEmpty(@get('tags'))
  ).observes('tags.@each')

`export default TaggingSelect2`
