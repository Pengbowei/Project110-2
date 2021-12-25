import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCamera,
  faPlus,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import {
  StyledPostForm,
  StyledFormBtn,
  CloseBtn,
  SubmitBtn,
  PostLabel,
  MotionFolder,
  StyledFolder,
  Folder,
  ImgInput,
  PreviewFile,
  PreviewVideo,
  PreviewImg,
  PreviewDltBtn,
  PostText,
  PostTextArea,
  MotionPlus,
  StyledPlusIcon,
} from "./PostStyles";

const Post = () => {
  const [caption, setCaption] = useState("");
  const [file, setFile] = useState(undefined);
  const [fileType, setFileType] = useState("");
  const [isUploaded, setIsUploaded] = useState(false);

  function captionChange(e) {
    setCaption(e.target.value);
    console.log(caption);
    //   captureCaption(caption);
  }

  function fileChange(e) {
    //   captureFile(e.target.files[0]);

    setFileType(e.target.files[0].type);
    let reader = new FileReader();

    reader.onload = function (e) {
      setFile(e.target.result);
      setIsUploaded(true);
    };

    reader.readAsDataURL(e.target.files[0]);
  }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   handleOk();
  // }

  const [isOnClick, setIsOnClick] = useState(false);
  function Click() {
    setIsOnClick(true);
  }

  function BackToIcon() {
    setIsOnClick(false);
  }

  return (
    <div>
      {isOnClick ? (
        <StyledPostForm
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          //   onSubmit={handleSubmit}
        >
          <StyledFormBtn>
            <CloseBtn
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              value="Close"
              onClick={BackToIcon}
            />
            <SubmitBtn
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              value="Submit"
            />
          </StyledFormBtn>

          <PostLabel>
            <MotionFolder>
              {!isUploaded ? (
                <StyledFolder
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ImgInput
                    type="file"
                    id="upload-input"
                    accept=".jpg,.jpeg,.gif,.png,.mp4"
                    onChange={fileChange}
                  />
                  <Folder htmlFor="upload-input">
                    <FontAwesomeIcon icon={faCamera} />
                    choose a photo or video
                  </Folder>
                </StyledFolder>
              ) : (
                <PreviewFile>
                  {fileType.includes("video") ? (
                    <PreviewVideo
                      src={file}
                      draggable={false}
                      controls
                      autoPlay
                      alt="uploaded-img"
                    />
                  ) : (
                    <PreviewImg
                      id="uploaded-image"
                      src={file}
                      draggable={false}
                      alt="uploaded-img"
                    />
                  )}
                  <PreviewDltBtn
                    onClick={() => {
                      setIsUploaded(false);
                      setFile(null);
                    }}
                  >
                    {" "}
                    <FontAwesomeIcon icon={faTimesCircle} />
                  </PreviewDltBtn>
                </PreviewFile>
              )}
            </MotionFolder>
          </PostLabel>
          <PostText>
            <PostTextArea
              id="caption"
              name="caption"
              onChange={captionChange}
              placeholder="About some cool things"
            />
          </PostText>
        </StyledPostForm>
      ) : (
        <MotionPlus
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <StyledPlusIcon
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={Click}
          >
            <FontAwesomeIcon icon={faPlus} />
          </StyledPlusIcon>
        </MotionPlus>
      )}
    </div>
  );
};

export default Post;
