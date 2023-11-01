interface TestComponentProps {
  title: string;
}

export const TestComponent = ({ title }: TestComponentProps) => {
  return (
    <div style={{ backgroundColor: 'greenyellow', fontSize: '100px' }}>
      <h1>{title}</h1>
    </div>
  );
};
