import { Box } from '@chakra-ui/react';
import React from 'react';

export const EditorContainer: React.FC = ({ children }) => {
  return (
    <Box bg="#FFFFFF" color="#444444" padding="12px">
      {children}
    </Box>
  );
};
