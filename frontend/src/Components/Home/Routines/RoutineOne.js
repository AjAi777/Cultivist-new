import MorningRoutine from './RountineType/MorningRoutine';
import NightRoutine from './RountineType/NightRoutine';

export default function RoutineOne() {
  return (
    <>
      <div className='jadoo px-2 text-center'>
        <div className='row mx-auto'>
          <h2 className='fw-bold mt-2 mb-4'>DAILY ROUTINES</h2>
        </div>
        <MorningRoutine />
        <div className='space3' />
        <NightRoutine />
      </div>
    </>
  );
}
