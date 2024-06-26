import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

interface IAnimatePage {
  children: React.ReactNode;
}

export default function AnimatePage({ children }: IAnimatePage) {
  return (
    <AnimatePresence>
      <StyledMotion
        className='motion'
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ delay: 0.1, duration: 0.1 }}
      >
        {children}
      </StyledMotion>
    </AnimatePresence>
  );
}

const StyledMotion = styled(motion.section)`
  height: 100%;
`;
