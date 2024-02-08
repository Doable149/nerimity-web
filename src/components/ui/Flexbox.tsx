import { styled } from "solid-styled-components";

interface FlexRowProps {
  gap?: number;
  itemsCenter?: boolean
  wrap?: boolean
  justifyCenter?: boolean
} 

interface FlexColumnProps {
  gap?: number;
  itemsCenter?: boolean
  padding?: number
} 

export const FlexRow = styled("div")<FlexRowProps>`
  display: flex;
  gap: ${props => props.gap || 0}px;
  ${props => props.itemsCenter ? "align-items: center;" : ""}
  ${props => props.justifyCenter ? "justify-content: center;" : ""}
  ${props => props.wrap ? "flex-wrap: wrap;" : ""}
  `;

export const FlexColumn = styled("div")<FlexColumnProps>`
  display: flex;
  flex-direction: column;
  ${props => props.itemsCenter ? "align-items: center;" : ""}
  gap: ${props => props.gap || 0}px;
  ${props => props.padding ? `padding: ${props.padding}px;` : ""}
`;
