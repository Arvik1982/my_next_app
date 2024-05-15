import React, { FC, useEffect, useRef, useState } from 'react';
import * as SC from './Project.style';
import Select from '@/app/components/ui/Select/Select';
import { useAppSelector } from '@/lib/storeHooks';
import SpecialistSlidingModal from '@/app/(main)/specialists/_components/CatalogSpecialists/SpecialistSlidingModal/SpecialistSlidingModal';
import { ProjectProps } from './Project.type';
import { ISpecialists } from '@/lib/store/types';

const Project: FC<ProjectProps> = ({ project }) => {
  const PROJECT_COVER_WIDTH = 380;
  const PROJECT_COVER_HEIGHT = 244;
  const [specialistWindow, setSpecialistWindow] = useState<ISpecialists | null>(null);
  const [isVideo, setIsVideo] = useState(false);
  const [isImage, setIsImage] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const specialists = useAppSelector((state) => state.specialists.specialists);

  const getFullNameAuthor = (authors: ISpecialists[]) => {
    return `${authors[0]?.first_name} ${authors[0]?.second_name}`;
  };

  useEffect(() => {
    if (project.projectCover) {
      const fileType = project.projectCover.type;
      setIsVideo(fileType.startsWith('video/'));
      setIsImage(fileType.startsWith('image/'));
    }
  }, []);
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

  const goToPage = (e: string) => {
    const specialist = specialists.filter((i) => i.uid === e);
    setSpecialistWindow(specialist[0]);
  };

  return (
    <SC.ContainerProjectCover>
      {project.projectCover ? (
        isVideo ? (
          <SC.Cover
            ref={videoRef}
            muted
            width={PROJECT_COVER_WIDTH}
            height={PROJECT_COVER_HEIGHT}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <source src={URL.createObjectURL(project.projectCover)} />
          </SC.Cover>
        ) : isImage ? (
          <SC.CoverImg
            src={URL.createObjectURL(project.projectCover)}
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
      <SC.AboutProject>
        <SC.NameProject>{project.nameProject}</SC.NameProject>
        {!project.authors.length ? (
          <SC.Author>Автор</SC.Author>
        ) : project.authors.length === 1 ? (
          <SC.Author>{getFullNameAuthor(project.authors)}</SC.Author>
        ) : (
          <Select authors={project.authors} goToPage={goToPage} />
        )}
      </SC.AboutProject>
      {!!specialistWindow && (
        <SpecialistSlidingModal openModal handleClose={() => setSpecialistWindow(null)} specialist={specialistWindow} />
      )}
    </SC.ContainerProjectCover>
  );
};

export default Project;
