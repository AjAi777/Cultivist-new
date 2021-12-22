import MorningRoutine from './RountineType/MorningRoutine';
import NightRoutine from './RountineType/NightRoutine';

export default function RoutineOne() {
  return (
    <>
      <div className='jadoo px-2 text-center bg-light'>
        <div className='row mx-auto'>
          <h1 className='fw-bold mt-2 mb-4'>DAILY ROUTINES</h1>
        </div>
        <MorningRoutine />
        <NightRoutine />
      </div>
    </>
  );
}
