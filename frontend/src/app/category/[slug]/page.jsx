
'use client';
import { useParams } from 'next/navigation';
import AnimeComponent from '../../components/AnimeComponents';
// import Header from "../../components/Header";
import GymfreekComponent from '../../components/GymfreekComponents';
import MarvelComponent from '@/app/components/MarvelComponents';
import SanatanComponent from '@/app/components/SanatanComponents';
import PlainComponent from '@/app/components/PlainComponents';

export default function CategoryPage() {
  const { slug } = useParams();
  const categoryName = slug.replace(/-/g, ' ');

  return (
    <>
   
      <div className="p-6">
        

        {slug === 'anime-tees' && <AnimeComponent />}
        {slug === 'marvels-tees' && <MarvelComponent/>}
        {slug === 'sanatan-tees' && <SanatanComponent/>}
        {slug === 'gym-freaks' && <GymfreekComponent/>}
        {slug === 'plain-tees' && <PlainComponent/>}

        {!['anime-tees', 'marvels-tees', 'sanatan-tees', 'gym-freaks', 'plain-tees'].includes(slug) && (
          <p className="text-red-500">⚠️ Category not found.</p>
        )}
      </div>
    </>
  );
}





