import Confetti from 'react-dom-confetti';

export const Button = (props) => (
  <button
    type="button"
    className="btn fixed top-0 right-0 m-2 !bg-[#E2E8F022] text-[#E2E8F0]"
    {...props}
  />
);

export const ConfettiWrapper = ({ isCopied }) => {
  const config = {
    angle: 90,
    spread: 110,
    startVelocity: 100,
    elementCount: 200,
    dragFriction: 0.12,
    duration: 3500,
    stagger: 1,
    width: '10px',
    height: '10px',
    perspective: '700px',
    colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'],
  };
  return (
    <div className="absolute inset-x-1/2 bottom-0">
      <Confetti active={isCopied} config={config} />
    </div>
  );
};
