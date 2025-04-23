import styled, { css } from "styled-components";

export const Container = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing[16]} ${({ theme }) => theme.spacing[16]};
`

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-bottom: ${({ theme }) => theme.spacing[10]};
  text-align: center;

  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.primary},
      ${({ theme }) => theme.colors.accent}
    );
    margin: ${({ theme }) => theme.spacing[4]} auto 0;
    border-radius: ${({ theme }) => theme.borderRadius.full};
  }
`

export const TimelineContainer = styled.div`
    position: relative;
    max-width: 800px;
    margin: 0 auto;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 50%;
        width: 2px;
        background: ${({ theme }) => theme.colors.primary};
        transform: translateX(-50%);
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        &::before {
            left: 20px;
        }
    }
`

export const TimelineItem = styled.div<{ isEven: boolean }>`
    display: flex;
    justify-content: center;
    position: relative;
    margin-bottom: ${({ theme }) => theme.spacing[16]};

    ${({ isEven }) => isEven && css`
        flex-direction: row-reverse;

        ${Year} {
            margin-left: 0;
            margin-right: ${({ theme }) => theme.spacing[8]};
        }

        ${Content} {
            $::before {
                left: auto;
                right: -10px;
                border-width: 10px 0 10px 10px;
                border-color: transparent transparent transparent ${({ theme }) => theme.colors.cardBackground};
            }
        }

        @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
            flex-direction: row;

            ${Year} {
                margin-right: 0;
                margin-left: ${({ theme }) => theme.spacing[8]};
            }

            ${Content} {
                &::before {
                    right: auto;
                    left: -10px;
                    border-width: 10px 10px 10px 0;
                    border-color: transparent ${({ theme }) => theme.colors.cardBackground} transparent transparent;
                }
            }
        }
    `}

    &::after {
        content: '';
        position: absolute;
        width: 16px;
        height: 16px;
        background-color: ${({ theme }) => theme.colors.background};
        border: 3px solid ${({ theme }) => theme.colors.primary};
        border-radius: 50%;
        top: 15px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 1;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        justify-content: flex-start;
        padding-left: 40px;

        &::after {
            left: 20px;
            transform: none;
        }
    }
`

export const Year = styled.div`
    min-width: 80px;
    margin-top: ${({ theme }) => theme.spacing[1]};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.colors.primary};
    margin-right: ${({ theme }) => theme.spacing[8]};
    text-align: right;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        margin-right: ${({ theme }) => theme.spacing[3]};
        margin-left: ${({ theme }) => theme.spacing[3]};
        font-size: 0.9rem;
        min-width: auto;
    }
`

export const Content = styled.div`
    background-color: ${({ theme }) => theme.colors.cardBackground};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    padding: ${({ theme }) => theme.spacing[4]};
    max-width: 280px;
    box-shadow: ${({ theme }) => theme.shadows.md};
    position: relative;
    border: 1px solid ${({ theme }) => theme.colors.border};

    &::before {
        content: '';
        position: absolute;
        top: 15px;
        left: -10px;
        border-width: 10px 10px 10px 0;
        border-style: solid;
        border-color: transparent ${({ theme }) => theme.colors.cardBackground} transparent transparent;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        max-width: 100%;
    }
`

export const ContentText = styled.p`
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 0.9rem;
    line-height: 1.6;
`