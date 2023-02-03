type Props = {
  children: React.ReactNode;
};

export const Button = ({ children }: Props) => {
  return (
    <button>
      <span className="mx-2">{children}</span>
    </button>
  );
};
