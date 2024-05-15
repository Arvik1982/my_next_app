import { Button, EmptyCard } from '@/app/components';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { useAppSelector } from '@/lib/storeHooks';
import * as SC from './Content.style';
import { InitialStateCreateProject } from '@/lib/store/createProjectSlice/createProjectSlice';
import React, { useState } from 'react';
import Project from '@/app/(main)/(protected)/profile/_components/Project/Project';
import CreateProject from '@/app/(main)/_components/CreateProject/CreateProject';

const Content = () => {
  const ICON_SIZE = 24;
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  const projects = useAppSelector<InitialStateCreateProject>((state) => state.createProject);
  const mainText = `${t('profile.mainText')}`;
  const secondaryText = `${t('profile.secondaryText')}`;
  const exit = () => setOpen(false);
  const createOpen = () => setOpen(true);
  return (
    <>
      {!!projects.project.length ? (
        <SC.ProjectContainer>
          {projects.project.map((i) => {
            return <Project key={i.nameProject} project={i} />;
          })}
        </SC.ProjectContainer>
      ) : (
        <EmptyCard icon='/images/folder.svg' mainText={mainText} secondaryText={secondaryText}>
          <Button
            startIcon={<Image src='/images/plus.svg' alt='plus-icon' width={ICON_SIZE} height={ICON_SIZE} />}
            onClick={createOpen}
          >
            {t('profile.addProjects')}
          </Button>
        </EmptyCard>
      )}
      {open && <CreateProject exit={exit} />}
    </>
  );
};

export default Content;
