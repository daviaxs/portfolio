import styled from "styled-components"

import { theme, themeConstants } from "@/shared/theme"

interface IRectangleProps {
  width: number
  height: number
  colorSecondary?: boolean
}

export const Rectangles = styled.span`
  display: flex;
  justify-content: start;

  position: relative;
  z-index: 0;
  bottom: 0;
`

export const Rectangle = styled.span<IRectangleProps>`
  width: ${(props) => props.width}rem;
  height: ${(props) => props.height}rem;

  border-radius: ${themeConstants.sizes.sm}rem;
  background-color: ${(props) => (props.colorSecondary ? theme.elements.secondary : theme.elements.primary)};

  position: absolute;

  &._1 {
    transform: translateY(-0.313rem) translateX(-0.625rem);
    animation: rectangleAnimation_1 infinite 5s linear;

    @keyframes rectangleAnimation_1 {
      0% {
        transform: translateY(-0.313rem) translateX(-0.625rem) rotate(0deg);
      }
      25% {
        transform: translateY(-2rem) translateX(-1rem) rotate(180deg);
      }
      50% {
        transform: translateY(-2rem) translateX(2rem) rotate(360deg);
      }
      75% {
        transform: translateY(-0.313rem) translateX(3rem) rotate(540deg);
      }
      100% {
        transform: translateY(-0.313rem) translateX(-0.625rem) rotate(720deg);
      }
    }
  }
  &._2 {
    animation: rectangleAnimation_2 infinite 2.5s cubic-bezier(0.445, 0.05, 0.55, 0.95);

    @keyframes rectangleAnimation_2 {
      0% {
        transform: translateY(-0rem) translateX(12rem) rotate(-16deg);
      }
      50% {
        transform: translateY(-1rem) translateX(12rem) rotate(0deg);
      }
      100% {
        transform: translateY(-0rem) translateX(12rem) rotate(-16deg);
      }
    }
  }
  &._3 {
    animation: rectangleAnimation_3 infinite 2.2s cubic-bezier(0.445, 0.05, 0.55, 0.95);

    @keyframes rectangleAnimation_3 {
      0% {
        transform: translateY(2rem) translateX(20rem) rotate(0deg);
      }
      50% {
        transform: translateY(1rem) translateX(20rem) rotate(16deg);
      }
      100% {
        transform: translateY(2rem) translateX(20rem) rotate(0deg);
      }
    }
  }
  &._4 {
    animation: rectangleAnimation_4 infinite 2.2s cubic-bezier(0.445, 0.05, 0.55, 0.95);

    @keyframes rectangleAnimation_4 {
      0% {
        transform: translateY(3rem) translateX(30rem) rotate(-25deg);
      }
      50% {
        transform: translateY(4rem) translateX(30rem) rotate(0deg);
      }
      100% {
        transform: translateY(3rem) translateX(30rem) rotate(-25deg);
      }
    }
  }
  &._5 {
    animation: rectangleAnimation_5 infinite 3s cubic-bezier(0.445, 0.05, 0.55, 0.95);

    @keyframes rectangleAnimation_5 {
      0% {
        transform: translateY(12rem) translateX(27rem) rotate(0deg);
      }
      50% {
        transform: translateY(10rem) translateX(27rem) rotate(-25deg);
      }
      100% {
        transform: translateY(12rem) translateX(27rem) rotate(0deg);
      }
    }
  }
  &._6 {
    animation: rectangleAnimation_6 infinite 3.5s cubic-bezier(0.445, 0.05, 0.55, 0.95);

    @keyframes rectangleAnimation_6 {
      0% {
        transform: translateY(13rem) translateX(22rem) rotate(-25deg);
      }
      50% {
        transform: translateY(10rem) translateX(22rem) rotate(0deg);
      }
      100% {
        transform: translateY(13rem) translateX(22rem) rotate(-25deg);
      }
    }
  }
  &._7 {
    animation: rectangleAnimation_7 infinite 2.5s cubic-bezier(0.445, 0.05, 0.55, 0.95);

    @keyframes rectangleAnimation_7 {
      0% {
        transform: translateY(13rem) translateX(1rem) rotate(-25deg);
      }
      50% {
        transform: translateY(10rem) translateX(1rem) rotate(0deg);
      }
      100% {
        transform: translateY(13rem) translateX(1rem) rotate(-25deg);
      }
    }
  }
  &._8 {
    animation: rectangleAnimation_8 infinite 3s cubic-bezier(0.445, 0.05, 0.55, 0.95);

    @keyframes rectangleAnimation_8 {
      0% {
        transform: translateY(12rem) translateX(5rem) rotate(-10deg);
      }
      50% {
        transform: translateY(14rem) translateX(5rem) rotate(30deg);
      }
      100% {
        transform: translateY(12rem) translateX(5rem) rotate(-10deg);
      }
    }
  }
  &._9 {
    animation: rectangleAnimation_9 infinite 3s cubic-bezier(0.445, 0.05, 0.55, 0.95);

    @keyframes rectangleAnimation_9 {
      0% {
        transform: translateY(10rem) translateX(-2rem) rotate(0deg);
      }
      50% {
        transform: translateY(8rem) translateX(-2rem) rotate(180deg);
      }
      100% {
        transform: translateY(10rem) translateX(-2rem) rotate(360deg);
      }
    }
  }
  &._10 {
    animation: rectangleAnimation_10 infinite 4s cubic-bezier(0.445, 0.05, 0.55, 0.95);

    @keyframes rectangleAnimation_10 {
      0% {
        transform: translateY(16rem) translateX(2.5rem) rotate(0deg);
      }
      50% {
        transform: translateY(14rem) translateX(2.5rem) rotate(180deg);
      }
      100% {
        transform: translateY(16rem) translateX(2.5rem) rotate(360deg);
      }
    }
  }
  &._11 {
    animation: rectangleAnimation_11 infinite 4s cubic-bezier(0.445, 0.05, 0.55, 0.95);

    @keyframes rectangleAnimation_11 {
      0% {
        transform: translateY(15rem) translateX(7rem) rotate(0deg);
      }
      50% {
        transform: translateY(19rem) translateX(7rem) rotate(-180deg);
      }
      100% {
        transform: translateY(15rem) translateX(7rem) rotate(-360deg);
      }
    }
  }
  &._12 {
    animation: rectangleAnimation_12 infinite 3.5s cubic-bezier(0.445, 0.05, 0.55, 0.95);

    @keyframes rectangleAnimation_12 {
      0% {
        transform: translateY(15rem) translateX(20rem) rotate(30deg);
      }
      50% {
        transform: translateY(19rem) translateX(20rem) rotate(210deg);
      }
      100% {
        transform: translateY(15rem) translateX(20rem) rotate(390deg);
      }
    }
  }
  &._13 {
    animation: rectangleAnimation_13 infinite 3.5s cubic-bezier(0.445, 0.05, 0.55, 0.95);

    @keyframes rectangleAnimation_13 {
      0% {
        transform: translateY(0rem) translateX(28rem) rotate(30deg);
      }
      50% {
        transform: translateY(-3rem) translateX(28rem) rotate(210deg);
      }
      100% {
        transform: translateY(0rem) translateX(28rem) rotate(390deg);
      }
    }
  }
  &._14 {
    animation: rectangleAnimation_14 infinite 4s cubic-bezier(0.445, 0.05, 0.55, 0.95);

    @keyframes rectangleAnimation_14 {
      0% {
        transform: translateY(-3rem) translateX(15rem) rotate(-10deg);
      }
      50% {
        transform: translateY(-5rem) translateX(15rem) rotate(-190deg);
      }
      100% {
        transform: translateY(-3rem) translateX(15rem) rotate(-370deg);
      }
    }
  }
  &._15 {
    animation: rectangleAnimation_15 infinite 4s cubic-bezier(0.445, 0.05, 0.55, 0.95);

    @keyframes rectangleAnimation_15 {
      0% {
        transform: translateY(-3rem) translateX(6rem) rotate(10deg);
      }
      50% {
        transform: translateY(-5rem) translateX(6rem) rotate(190deg);
      }
      100% {
        transform: translateY(-3rem) translateX(6rem) rotate(370deg);
      }
    }
  }

  @media screen and (max-width: 912px) {
    &._1 {
      transform: translateY(-0.313rem) translateX(-0.625rem);
      animation: rectangleAnimation_1 infinite 5s linear;

      @keyframes rectangleAnimation_1 {
        0% {
          transform: translateY(2rem) translateX(-15rem) rotate(0deg);
        }
        25% {
          transform: translateY(0rem) translateX(-15rem) rotate(180deg);
        }
        50% {
          transform: translateY(0rem) translateX(-12rem) rotate(360deg);
        }
        75% {
          transform: translateY(2rem) translateX(-12rem) rotate(540deg);
        }
        100% {
          transform: translateY(2rem) translateX(-15rem) rotate(720deg);
        }
      }
    }
    &._2 {
      animation: rectangleAnimation_2 infinite 2.5s cubic-bezier(0.445, 0.05, 0.55, 0.95);

      @keyframes rectangleAnimation_2 {
        0% {
          transform: translateY(-0.3rem) translateX(-3rem) rotate(0deg);
        }
        50% {
          transform: translateY(-1.3rem) translateX(-3rem) rotate(-30deg);
        }
        100% {
          transform: translateY(-0.3rem) translateX(-3rem) rotate(0deg);
        }
      }
    }
    &._3 {
      animation: rectangleAnimation_3 infinite 2.2s cubic-bezier(0.445, 0.05, 0.55, 0.95);

      @keyframes rectangleAnimation_3 {
        0% {
          transform: translateY(0rem) translateX(5.5rem) rotate(16deg);
        }
        50% {
          transform: translateY(-1rem) translateX(5.5rem) rotate(0deg);
        }
        100% {
          transform: translateY(0rem) translateX(5.5rem) rotate(16deg);
        }
      }
    }
    &._4 {
      animation: rectangleAnimation_4 infinite 2.2s cubic-bezier(0.445, 0.05, 0.55, 0.95);

      @keyframes rectangleAnimation_4 {
        0% {
          transform: translateY(5rem) translateX(14rem) rotate(-16deg);
        }
        50% {
          transform: translateY(3rem) translateX(14rem) rotate(0deg);
        }
        100% {
          transform: translateY(5rem) translateX(14rem) rotate(-16deg);
        }
      }
    }
    &._5 {
      animation: rectangleAnimation_5 infinite 3s cubic-bezier(0.445, 0.05, 0.55, 0.95);

      @keyframes rectangleAnimation_5 {
        0% {
          transform: translateY(9rem) translateX(10rem) rotate(0deg);
        }
        50% {
          transform: translateY(12rem) translateX(10rem) rotate(-25deg);
        }
        100% {
          transform: translateY(9rem) translateX(10rem) rotate(0deg);
        }
      }
    }
    &._6 {
      animation: rectangleAnimation_6 infinite 3.5s cubic-bezier(0.445, 0.05, 0.55, 0.95);

      @keyframes rectangleAnimation_6 {
        0% {
          transform: translateY(10rem) translateX(7rem) rotate(-25deg);
        }
        50% {
          transform: translateY(13rem) translateX(7rem) rotate(10deg);
        }
        100% {
          transform: translateY(10rem) translateX(7rem) rotate(-25deg);
        }
      }
    }
    &._7 {
      animation: rectangleAnimation_7 infinite 2.5s cubic-bezier(0.445, 0.05, 0.55, 0.95);

      @keyframes rectangleAnimation_7 {
        0% {
          transform: translateY(10rem) translateX(-10rem) rotate(0deg);
        }
        50% {
          transform: translateY(12rem) translateX(-10rem) rotate(30deg);
        }
        100% {
          transform: translateY(10rem) translateX(-10rem) rotate(0deg);
        }
      }
    }
    &._8 {
      animation: rectangleAnimation_8 infinite 3s cubic-bezier(0.445, 0.05, 0.55, 0.95);

      @keyframes rectangleAnimation_8 {
        0% {
          transform: translateY(10rem) translateX(-7rem) rotate(-10deg);
        }
        50% {
          transform: translateY(12rem) translateX(-7rem) rotate(30deg);
        }
        100% {
          transform: translateY(10rem) translateX(-7rem) rotate(-10deg);
        }
      }
    }
    &._9 {
      animation: rectangleAnimation_9 infinite 3s cubic-bezier(0.445, 0.05, 0.55, 0.95);

      @keyframes rectangleAnimation_9 {
        0% {
          transform: translateY(9rem) translateX(-13rem) rotate(0deg);
        }
        50% {
          transform: translateY(11rem) translateX(-13rem) rotate(180deg);
        }
        100% {
          transform: translateY(9rem) translateX(-13rem) rotate(360deg);
        }
      }
    }
    &._10 {
      animation: rectangleAnimation_10 infinite 4s cubic-bezier(0.445, 0.05, 0.55, 0.95);

      @keyframes rectangleAnimation_10 {
        0% {
          transform: translateY(13rem) translateX(-9rem) rotate(0deg);
        }
        50% {
          transform: translateY(15rem) translateX(-9rem) rotate(180deg);
        }
        100% {
          transform: translateY(13rem) translateX(-9rem) rotate(360deg);
        }
      }
    }
    &._11 {
      animation: rectangleAnimation_11 infinite 4s cubic-bezier(0.445, 0.05, 0.55, 0.95);

      @keyframes rectangleAnimation_11 {
        0% {
          transform: translateY(13rem) translateX(-5rem) rotate(0deg);
        }
        50% {
          transform: translateY(15rem) translateX(-5rem) rotate(-180deg);
        }
        100% {
          transform: translateY(13rem) translateX(-5rem) rotate(-360deg);
        }
      }
    }
    &._12 {
      animation: rectangleAnimation_12 infinite 3.5s cubic-bezier(0.445, 0.05, 0.55, 0.95);

      @keyframes rectangleAnimation_12 {
        0% {
          transform: translateY(15rem) translateX(6rem) rotate(30deg);
        }
        50% {
          transform: translateY(19rem) translateX(6rem) rotate(210deg);
        }
        100% {
          transform: translateY(15rem) translateX(6rem) rotate(390deg);
        }
      }
    }
    &._13 {
      animation: rectangleAnimation_13 infinite 3.5s cubic-bezier(0.445, 0.05, 0.55, 0.95);

      @keyframes rectangleAnimation_13 {
        0% {
          transform: translateY(-1rem) translateX(10rem) rotate(30deg);
        }
        50% {
          transform: translateY(3rem) translateX(10rem) rotate(210deg);
        }
        100% {
          transform: translateY(-1rem) translateX(10rem) rotate(390deg);
        }
      }
    }
    &._14 {
      animation: rectangleAnimation_14 infinite 4s cubic-bezier(0.445, 0.05, 0.55, 0.95);

      @keyframes rectangleAnimation_14 {
        0% {
          transform: translateY(-3rem) translateX(0rem) rotate(-10deg);
        }
        50% {
          transform: translateY(-6rem) translateX(0rem) rotate(-190deg);
        }
        100% {
          transform: translateY(-3rem) translateX(0rem) rotate(-370deg);
        }
      }
    }
    &._15 {
      animation: rectangleAnimation_15 infinite 4s cubic-bezier(0.445, 0.05, 0.55, 0.95);

      @keyframes rectangleAnimation_15 {
        0% {
          transform: translateY(-1rem) translateX(-9rem) rotate(10deg);
        }
        50% {
          transform: translateY(-4rem) translateX(-9rem) rotate(190deg);
        }
        100% {
          transform: translateY(-1rem) translateX(-9rem) rotate(370deg);
        }
      }
    }
  }
`