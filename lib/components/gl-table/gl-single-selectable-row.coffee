`import SelectableRow from './gl-selectable-row'`

SingleSelectableRow = SelectableRow.extend
  click: ->
    @get('selection').clear()
    @get('selection').add(@get('content'))
    @triggerAction action: 'selectRow', actionContext: @

`export default SingleSelectableRow`
