import React from 'react'
import Button from '../atoms/Button'

type AddNewSkeletonProps = {
  handleAdd: () => void;
}

const AddNewSkeleton = ({ handleAdd }: AddNewSkeletonProps) => {
  return (
    <div>
      <div className="flex w-md min-h-28 items-center justify-center h-full rounded-md border-2 border-gray-200 border-dashed" >
        <Button
          variant="secondary"
          className="self-center"
          size="inherit"
          onClick={handleAdd}
          type="button"
        >
          +
        </Button>
      </div>
    </div>
  )
}

export default AddNewSkeleton