const ManageButton = (params) => {
  const editingCells = params.api.getEditingCells();
  const isCurrentRowEditing = editingCells.some((cell) => {
    return cell.rowIndex === params.node.rowIndex;
  });

  const onClickCancel = (e) => {
    e.preventDefault();
    params.api.stopEditing(true);
  };

  const onClickEdit = (e) => {
    e.preventDefault();
    params.api.startEditingCell({
      rowIndex: params.node.rowIndex,
      colKey: params.column,
    });
  };

  const onClickUpdate = async (e) => {
    e.preventDefault();
    params.api.stopEditing(false);
    await params.handleUpdate(params.data);
  };

  return (
    <>
      <button type="button" className="btn btn-primary" onClick={isCurrentRowEditing ? onClickUpdate : onClickEdit}>
        {isCurrentRowEditing ? '저장' : '수정'}
      </button>
      {isCurrentRowEditing && (
        <button type="button" className="btn btn-default" onClick={onClickCancel}>
          취소
        </button>
      )}
    </>
  );
};

export default ManageButton;
