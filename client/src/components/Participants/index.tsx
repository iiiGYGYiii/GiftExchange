import "./Participants.styles.scss";

export default function Participants({
  participants,
}: {
  participants: string[];
}) {
  return (
    <div className="participants-display">
      {participants.map((participant) => (
        <div key={participant} className="participant">
          {participant}
        </div>
      ))}
    </div>
  );
}
