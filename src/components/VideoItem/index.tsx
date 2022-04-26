import { Button, Container, Details, Thumb } from "./styles";

import { BsFillPlayFill } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaTrashAlt } from 'react-icons/fa';
import { RiAddCircleLine } from 'react-icons/ri';

interface VideoProps {
  addMode?: boolean;
}

export function VideoItem({ addMode = false }: VideoProps) {
  return (
    <Container>
      <Thumb imgUrl="" />
      <Details>
        <strong title="Meu titulo">Meu título</strong>
        <div>
          <div>
            {addMode ? (
              <Button>
                <RiAddCircleLine />
                Add to list
              </Button>
            ) : (
              <>
                <Button>
                  <BsFillPlayFill />
                  Play now
                </Button>
                <FaTrashAlt size={12} />
              </>
            )}
            
          </div>
          <span>
            <AiOutlineClockCircle />
            15:34
          </span>
        </div>
      </Details>
    </Container>
  )
}