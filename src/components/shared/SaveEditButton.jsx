export default function SaveEditButton({isEditing, handleClick}){
    return(
        <button type="button" className={isEditing? "save-button": "edit-button"} onClick={handleClick}>
        {isEditing? "Save": "Edit"}
        </button>
    )
}