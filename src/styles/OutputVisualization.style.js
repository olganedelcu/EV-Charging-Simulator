import styled from 'styled-components';

export const ResultsContainer = styled.div`
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 0.75rem;
  box-shadow: 0 4px 0.75rem rgba(0, 0, 0, 0.1);
  margin-top: 2rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

export const ResultTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  text-align: center;
`;

export const ResultItem = styled.p`
  font-size: 1.25rem;
  color: #34495e;
  margin-bottom: 1rem;
  border-bottom: 1px solid #ecf0f1;
  padding-bottom: 0.75rem;
`;

export const ChartContainer = styled.div`
  margin-top: 2rem;
  padding: 1.5rem;
  background-color: #f9f9f9;
  border-radius: 0.6rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;

  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #2980b9;
    margin-bottom: 1rem;
  }
`;
