import { SetStateAction, MouseEvent, Dispatch, useState } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  Box,
  Typography,
  AvatarGroup,
  Avatar,
  TextField,
  Select,
 
  
  
} from '@mui/material';
import { IEventInfo } from '../Calendar/Calendar';






interface IProps {
  open: boolean;
  handleClose: Dispatch<SetStateAction<void>>;
  onDeleteEvent: (e: MouseEvent<HTMLButtonElement>) => void;
  currentEvent: IEventInfo | null;
}


const EventInfoModal = ({ open, handleClose, onDeleteEvent, currentEvent }: IProps) => {

  const [color, setColor] = useState('red')
  const [members, setMembers] = useState(50)

  const onClose = () => {
    handleClose();
  };

  const handleColorChoose = () => {
    
  };

  return (
    <Dialog fullWidth={true} open={open} onClose={onClose}>

<DialogTitle>

<Box sx={{display:'flex', justifyContent:'space-between', alignItems:'flex-end', gap: '15px'}}>

  <TextField
  value={currentEvent?.title}
  fullWidth={true}
  // onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
  // setName(event.target.value);
  id="standard-basic" 
  // label="Standard" 
  variant="standard" />
<Box sx={{borderBottom:'solid 1px', borderColor:'#949494',  boxSizing:'border-box', display:'flex', alignItems: 'center', gap:'5px', cursor:'pointer'}}>
  <Box sx={{ borderRadius:'6px', width:'20px', height:'20px', bgcolor:`${color}`}}/>
          
    <Box >
            <svg width="20" height="9" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 1L6 6L1 1" stroke="#A1A1A1" stroke-linecap="square"/>
            </svg>
    </Box> 
    </Box>
</Box>


</DialogTitle>

      <DialogContent>
        <Box component='form' sx={{ height: 300, display:'flex', flexDirection:'column', alignItems:'baseline', gap:'20px', paddingTop:'0px'}} >  
        <Box sx={{display:'flex', alignItems:'baseline', gap:'10px'}}>
          <Avatar 
          alt="Remy Sharp" 
          src="/static/images/avatar/1.jpg" />
          <Typography          
          sx={{ fontSize: 14, }} 
          color='text.secondary' 
          gutterBottom>
            Remy Sharp
          </Typography>
        </Box> 

        <Box sx={{
          display:'flex', 
          alignItems:'baseline', 
          gap:'10px'}}>          
          <Box>day</Box>
          <Box>Time start</Box>
          <Box>Time end</Box>
        </Box>

        <Box >

        <Typography 
        sx={{ fontSize: 14}} 
        color='text.secondary' 
        gutterBottom> участники 
        </Typography>
    
    <Box sx={{display:'flex', gap:'5px', alignItems:'center'}}>
      
         <Box sx={{display:'flex', gap:'5px'}}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
            <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          </Box>
        
        <Box sx={{display:'flex', gap:'200px'}} >
        <Typography sx={{textDecoration: 'underline dotted #949494',textUnderlineOffset: '3px', cursor:'pointer'}}>все {members}</Typography>
       <Box sx={{display:'flex', gap:'5px', alignItems:'center'}}>
        <Typography sx={{textDecoration: 'underline dotted #949494',textUnderlineOffset: '3px', cursor:'pointer'}}>Открыть чат</Typography>
        
        <Box sx={{cursor:'pointer'}} >
            <svg width="20" height="9" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 1L6 6L1 1" stroke="#A1A1A1" stroke-linecap="square"/>
            </svg>
        </Box>
        </Box> 

        </Box>

    </Box> 

        </Box>

                    
        </Box>

        {/* <DialogContentText>
          <Typography sx={{ fontSize: 14, marginTop: 3}} color='text.secondary' gutterBottom>{currentEvent?.desc}</Typography>
        </DialogContentText> */}

        </DialogContent>

      <DialogActions sx={{display:'flex', justifyContent: 'center'}}>

      <Button  variant="contained"  onClick={onClose}>
          УЧАСТВОВАТЬ
        </Button>      
        <Button  variant="outlined"  onClick={onClose}>
          ОТКАЗАТЬСЯ
        </Button>
        <Button variant="text" onClick={onDeleteEvent}>
          Delete Event
        </Button>

      </DialogActions>
    </Dialog>
  );
};

export default EventInfoModal;
