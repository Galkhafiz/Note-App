import { initializeEditPage, generateLastEdited } from './views'
import { updateNote, removedNote } from './notes'

const titleEl = document.querySelector('#note-title')
const bodyEl = document.querySelector('#note-body')
const removeNote = document.querySelector('#remove-note')
const dateEl = document.querySelector('#last-edited')
const noteId = location.hash.substring(1)

initializeEditPage(noteId)

titleEl.addEventListener('input', (e) => {
    const note = updateNote(noteId, {
        title: e.target.value
    })
    dateEl.textContent = generateLastEdited(note.updatedAt)
})

bodyEl.addEventListener('input', (e) => {
    const note = updateNote(noteId, {
        body: e.target.value
    })
    dateEl.textContent = generateLastEdited(note.updatedAt)
})

removeNote.addEventListener('click', (e) => {
    removedNote(noteId)
    location.assign('/index.html')
})

window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        initializeEditPage(noteId)
    }
})


