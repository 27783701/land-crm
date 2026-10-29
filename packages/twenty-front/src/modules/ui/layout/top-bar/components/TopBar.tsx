import { styled } from '@linaria/react';
import { type ReactNode } from 'react';
import { themeCssVariables } from 'twenty-ui/theme';

type TopBarProps = {
  className?: string;
  leftComponent?: ReactNode;
  rightComponent?: ReactNode;
  bottomComponent?: ReactNode;
  displayBottomBorder?: boolean;
};

const StyledContainer = styled.div`
  border-bottom: 1px solid ${themeCssVariables.border.color.light};
  display: flex;
  flex-direction: column;

  margin-left: 0;
  width: 100%;
`;

const StyledTopBar = styled.div`
  align-items: center;

  box-sizing: border-box;
  color: ${themeCssVariables.font.color.secondary};
  display: flex;
  flex-direction: row;
  font-weight: ${themeCssVariables.font.weight.medium};
  min-height: 48px;
  justify-content: space-between;
  gap: ${themeCssVariables.spacing[3]};
  padding: 0 ${themeCssVariables.spacing[4]};

  z-index: 7;
`;

const StyledLeftSection = styled.div`
  align-items: center;
  display: flex;
  min-width: 0;
`;

const StyledRightSection = styled.div`
  align-items: center;
  display: flex;
  flex-shrink: 0;
  flex-wrap: wrap;
  font-weight: ${themeCssVariables.font.weight.regular};
  gap: ${themeCssVariables.spacing[2]};
  justify-content: flex-end;
`;

export const TopBar = ({
  className,
  leftComponent,
  rightComponent,
  bottomComponent,
}: TopBarProps) => (
  <StyledContainer className={className}>
    <StyledTopBar>
      <StyledLeftSection>{leftComponent}</StyledLeftSection>
      <StyledRightSection>{rightComponent}</StyledRightSection>
    </StyledTopBar>
    {bottomComponent}
  </StyledContainer>
);
