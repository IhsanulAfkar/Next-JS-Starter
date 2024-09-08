import { NextPage } from 'next'
import { Dispatch, SetStateAction } from 'react'
import { FilePond, registerPlugin } from 'react-filepond'
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview, FilePondPluginFileValidateType);
interface Props {
  files: File[],
  setFiles: Dispatch<SetStateAction<File[]>>
}

const UploadFile: NextPage<Props> = ({ files, setFiles }) => {
  return <FilePond
    files={files}
    onupdatefiles={setFiles as any}
    className=''
    // allowMultiple
    acceptedFileTypes={['image/png', 'image/jpg', 'image/jpeg']}
    credits={false}
    labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
  />
}

export default UploadFile