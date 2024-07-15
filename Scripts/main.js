exports.activate = function() {
  // Do work when the extension is activated
}

exports.deactivate = function() {
  // Clean up state before the extension is deactivated
}

nova.commands.register("copy-path.absolute", (editor) => copyPath(editor, false, false, false, false))
nova.commands.register("copy-path.absolute-line", (editor) => copyPath(editor, false, true, false, false))
nova.commands.register("copy-path.absolute-line-column", (editor) => copyPath(editor, false, true, true, false))
nova.commands.register("copy-path.relative", (editor) => copyPath(editor, true, false, false, false))
nova.commands.register("copy-path.relative-line", (editor) => copyPath(editor, true, true, false, false))
nova.commands.register("copy-path.relative-line-column", (editor) => copyPath(editor, true, true, true, false))
nova.commands.register("copy-path.nova-absolute", (editor) => copyPath(editor, false, false, false, true))
nova.commands.register("copy-path.nova-absolute-line", (editor) => copyPath(editor, false, true, false, true))
nova.commands.register("copy-path.nova-absolute-line-column", (editor) => copyPath(editor, false, true, true, true))

function copyPath(editor, asRelativePath, includeLineNumber, includeColumnNumber, novaFormat) {
  const text = editor.document.getTextInRange(new Range(0, editor.document.length))
  const cursorPosition = editor.selectedRange.start
  const lines = text.slice(0, cursorPosition).split('\n')
  const line = lines.length
  const column = lines.slice(-1)[0].length + 1
  const path = editor.document.path

  let result;

  if (novaFormat) {
    result = `nova://open?path=${encodeURI(path)}`

    if (includeLineNumber) {
      result = result.concat(`&line=${line}`)
    }

    if (includeColumnNumber) {
      result = result.concat(`:${column}`)
    }
  } else {
    result = path

    if (asRelativePath) {
      result = nova.workspace.relativizePath(result)
    }

    if (includeLineNumber) {
      result = result.concat(":", line)
    }

    if (includeColumnNumber) {
      result = result.concat(":", column)
    }
  }

  nova.clipboard.writeText(result)
}
