'use client';
import * as SC from './CreateProject.style';
import Modal from '@mui/material/Modal';
import { Grid } from '@mui/material';
import { Button } from '@/app/components';
import React, { ChangeEvent, FC, KeyboardEventHandler, useRef, useState } from 'react';
import Image from 'next/image';
import { BpCheckbox, ButtonClear } from '@/app/components/';
import AutocompleteIn from './Autocomplete/AutocompleteIn';
import { useAppDispatch, useAppSelector } from '@/lib/storeHooks';
import KeyWordsInput from '@/app/(main)/_components/CreateProject/KeyWordsInput/KeyWordsInput';
import SelectAuthors from '@/app/components/ui/SelectAuthors/SelectAuthors';
import { changeName } from '@/lib/store/createProjectSlice/createProjectSlice';
import SpecialistSlidingModal from '@/app/(main)/specialists/_components/CatalogSpecialists/SpecialistSlidingModal/SpecialistSlidingModal';
import { CreateProjectProps } from './CreateProject.type';
import Project from '@/app/(main)/_components/CreateProject/Project/Project';
import { ISpecialists } from '@/lib/store/types';

const CreateProject: FC<CreateProjectProps> = ({ exit }) => {
  const EXIT_ICON_SIZE = 24;
  const COPY_IMG = 16;
  const specialists = useAppSelector((state) => state.specialists.specialists);
  const [specialistWindow, setSpecialistWindow] = useState<ISpecialists | null>(null);
  const [keyWords, setKeyWords] = useState('');
  const [keyWordsAll, setKeyWordsAll] = useState<string[]>([]);
  const [authors, setAuthors] = useState<ISpecialists[]>([]);
  const [projectCover, setProjectCover] = useState<File | null>(null);
  const [nameProject, setNameProject] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [link, setLink] = useState('');
  const [active, setActive] = useState('');
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  const [isVideo, setIsVideo] = useState(false);
  const [isImage, setIsImage] = useState(false);

  const getFullNameAuthor = (authors: ISpecialists[]) => {
    return `${authors[0]?.first_name} ${authors[0]?.second_name}`;
  };
  const goToPage = (e: string) => {
    const specialist = specialists.filter((i) => i.uid === e);
    setSpecialistWindow(specialist[0]);
  };
  const publish = () => {
    dispatch(
      changeName({
        nameProject,
        projectCover,
        link,
        authors,
        checked: isChecked,
        keyWords: keyWordsAll,
      }),
    );
    exit();
  };
  const handleCopyClick = () => {
    if (inputRef.current) navigator.clipboard.writeText(inputRef.current.value);
  };
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const fileType = file.type;
      setIsVideo(fileType.startsWith('video/'));
      setIsImage(fileType.startsWith('image/'));
      setProjectCover(file);
    }
  };
  const addAuthor = (spec: ISpecialists) => {
    if (!authors.some((item) => item.uid === spec.uid)) {
      setAuthors([...authors, spec]);
    }
  };
  const deleteAuthor = (spec: ISpecialists) => {
    const arr = authors.filter((i) => i.uid !== spec.uid);
    setAuthors(arr);
  };
  const handleKeyPress: KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === 'Enter' && keyWords.length !== 0) {
      setKeyWordsAll([...keyWordsAll, keyWords]);
      setKeyWords('');
    }
  };
  const handleBlurPress = () => {
    setActive('');
    if (keyWords.length !== 0) {
      setKeyWordsAll([...keyWordsAll, keyWords]);
      setKeyWords('');
    }
  };
  const changeKeyWords = (e: string) => {
    setKeyWords(e);
  };
  const changeProjectName = (e: ChangeEvent<HTMLInputElement>) => setNameProject(e.currentTarget.value);
  const deleteKeyWords = (e: string) => {
    setKeyWordsAll(keyWordsAll.filter((i) => i !== e));
  };
  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  return (
    <Modal open>
      <SC.BoxContainer>
        <SC.GridContainer container>
          <Grid item xs={5.5}>
            <SC.Label>
              Обложка проекта<span>(обязательно)</span>
            </SC.Label>
            <SC.ContainerProjectCover>
              <Project isVideo={isVideo} isImage={isImage} projectCover={projectCover} />
              <SC.AboutProject>
                <SC.NameProject>{nameProject || 'Название проекта'}</SC.NameProject>
                {!authors.length ? (
                  <SC.Author>Автор</SC.Author>
                ) : authors.length === 1 ? (
                  <SC.Author>{getFullNameAuthor(authors)}</SC.Author>
                ) : (
                  <SelectAuthors authors={authors} goToPage={goToPage} />
                )}
              </SC.AboutProject>
            </SC.ContainerProjectCover>
            <SC.InputWrapper>
              <SC.InputFile
                name='file'
                type='file'
                id='input__file'
                accept='video/*,image/*'
                onChange={handleFileChange}
              />
              <SC.InputFileButton htmlFor='input__file'>
                <SC.InputFileIconWrapper>
                  <Image src={'/images/add_image.svg'} alt={'add_image'} width={20} height={18} />
                </SC.InputFileIconWrapper>
                <SC.InputFileButtonText>Выберите файл</SC.InputFileButtonText>
              </SC.InputFileButton>
            </SC.InputWrapper>
          </Grid>
          <SC.GridInput item xs={6.5}>
            <div>
              <SC.InputLabel>Название проекта*</SC.InputLabel>
              <SC.BoxContainerInput
                onBlur={() => setActive('')}
                active={active === 'activeNameProject'}
                onClick={() => setActive('activeNameProject')}
              >
                <SC.CustomTextField
                  id='outlined-basic'
                  variant='outlined'
                  placeholder={'Добавьте название проекта'}
                  onChange={changeProjectName}
                />
              </SC.BoxContainerInput>
            </div>
            <div>
              <AutocompleteIn
                goToPage={goToPage}
                authors={authors}
                specialists={specialists}
                addAuthor={addAuthor}
                placeholder={'Выберите автора'}
                label={'Авторы проекта*'}
                deleteAuthor={deleteAuthor}
              />
            </div>
            <div>
              <SC.InputLabel>Ключевые слова (до 10)</SC.InputLabel>
              <div onClick={() => setActive('activeKeyWords')}>
                <KeyWordsInput
                  active={active === 'activeKeyWords'}
                  deleteKeyWords={deleteKeyWords}
                  value={keyWords}
                  changeKeyWords={changeKeyWords}
                  handleKeyPress={handleKeyPress}
                  keyWordsAll={keyWordsAll}
                  handleBlurPress={handleBlurPress}
                />
              </div>
            </div>
            <BpCheckbox onChange={handleCheckboxChange} label={'Проект с контентом для взрослых'} />
            <SC.LinkContainer>
              <SC.InputLabel>Ссылка на проект</SC.InputLabel>
              <SC.BoxContainerInput onBlur={() => setActive('')} active={active === 'activeLink'}>
                <SC.CustomTextField
                  onClick={() => setActive('activeLink')}
                  onChange={(e) => setLink(e.currentTarget.value)}
                  id='link'
                  variant='outlined'
                  inputRef={inputRef}
                />
                <SC.Icon
                  src={'/images/copy.svg'}
                  alt={'copy'}
                  width={COPY_IMG}
                  height={COPY_IMG}
                  onClick={handleCopyClick}
                />
              </SC.BoxContainerInput>
            </SC.LinkContainer>
          </SC.GridInput>
          <Grid item xs={5}>
            <SC.ButtonGroup>
              <Button fullWidth onClick={publish}>
                <SC.ButtonText>Опубликовать</SC.ButtonText>
              </Button>
              <ButtonClear fullWidth onClick={exit}>
                Отмена
              </ButtonClear>
            </SC.ButtonGroup>
          </Grid>
        </SC.GridContainer>
        <SC.Exit onClick={exit}>
          <SC.ExitIcon src={'/images/exit.svg'} alt={'exit icon'} width={EXIT_ICON_SIZE} height={EXIT_ICON_SIZE} />
        </SC.Exit>
        {!!specialistWindow && (
          <SpecialistSlidingModal
            openModal={true}
            handleClose={() => setSpecialistWindow(null)}
            specialist={specialistWindow}
          />
        )}
      </SC.BoxContainer>
    </Modal>
  );
};
export default CreateProject;
