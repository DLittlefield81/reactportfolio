import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import image from '../../images/dennis.jpg'

export default function ImageAvatars() {
    return (
        <Stack direction="col" spacing={2}>
            <Avatar alt="Dennis Littlefield" src={image} sx={{ textAlign: 'Center', width: 150, height: 150 }} />
        </Stack>
    );
}