type GreetingProps = {
    message: string;
};

export default function Greeting({ message }: GreetingProps) {
    return <div className="greeting-text">{message}</div>;
}
