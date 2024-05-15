import { FC, useEffect, useState } from 'react';
import { PropsButton } from '@/app/components/ui/SplitButtonGroup/SplitButtonGroup.type';
import * as SC from './SplitButtonGroup.style';
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';

const SplitButtonGroup: FC<PropsButton> = ({ nameButton, disabled, activeButton, onClickButton }) => {
  const [active, setActive] = useState(activeButton);
  const [buttons, setButtons] = useState(nameButton);

  const clickButtonHandler = (item: string) => {
    onClickButton(item);
    setActive(item);
  };

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }
    const updatedButtons = Array.from(buttons);
    const [reorderedButton] = updatedButtons.splice(result.source.index, 1);
    updatedButtons.splice(result.destination.index, 0, reorderedButton);

    setButtons(updatedButtons);
  };
  const handleMouseDown = (item: string) => {
    setActive(item);
  };

  useEffect(() => {
    setButtons(nameButton);
  }, [nameButton]);

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div>
        <Droppable droppableId='splitButtonGroup' direction='horizontal'>
          {(provided) => (
            <SC.MenuButton>
              <div ref={provided.innerRef} {...provided.droppableProps} style={{ display: 'flex' }}>
                {buttons.map((item, index) => (
                  <Draggable key={item} draggableId={item} index={index}>
                    {(provided) => (
                      <SC.ButtonNavigation
                        className={disabled?.length && disabled[index] === item ? 'disabledButton' : ''}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        onClick={() => clickButtonHandler(item)}
                        active={active === item}
                        onMouseDown={() => handleMouseDown(item)}
                        draggable
                      >
                        <SC.ButtonName>{item}</SC.ButtonName>
                      </SC.ButtonNavigation>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            </SC.MenuButton>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
};

export default SplitButtonGroup;
