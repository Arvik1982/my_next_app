'use client';

import * as SC from './Project.style';
import React, { FC, useRef } from 'react';
import { ProjectProps } from './Project.type';

const Project: FC<ProjectProps> = ({ isImage, isVideo, projectCover }) => {
  const PROJECT_COVER_WIDTH = 340;
  const PROJECT_COVER_HEIGHT = 244;
  const videoRef = useRef<HTMLVideoElement>(null);
  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };
  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };
  return (
    <>
      {projectCover ? (
        isVideo ? (
          <SC.Cover
            ref={videoRef}
            muted
            width={PROJECT_COVER_WIDTH}
            height={340}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <source src={URL.createObjectURL(projectCover)} />
          </SC.Cover>
        ) : isImage ? (
          <SC.CoverImg
            src={URL.createObjectURL(projectCover)}
            alt='projectCover'
            width={PROJECT_COVER_WIDTH}
            height={PROJECT_COVER_HEIGHT}
          />
        ) : (
          <SC.CoverImg
            src='/images/project-cover.png'
            alt='projectCover'
            width={PROJECT_COVER_WIDTH}
            height={PROJECT_COVER_HEIGHT}
          />
        )
      ) : (
        <SC.CoverImg
          src='/images/project-cover.png'
          alt='projectCover'
          width={PROJECT_COVER_WIDTH}
          height={PROJECT_COVER_HEIGHT}
        />
      )}
    </>
  );
};

export default Project;
