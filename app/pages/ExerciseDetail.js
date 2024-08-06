import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { fetchData, exerciseOptions, youtubeOptions } from "../utils/fetchData";
import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";

const ExerciseDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);

  useEffect(() => {
    if (!id) return; // Return if id is not available

    const fetchExercisesData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";

      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      try {
        const exerciseDetailData = await fetchData(
          `${exerciseDbUrl}/exercises/exercise/${id}`,
          exerciseOptions
        );
        setExerciseDetail(exerciseDetailData);

        const exerciseVideosData = await fetchData(
          `${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`,
          youtubeOptions
        );
        setExerciseVideos(exerciseVideosData.contents);

        const targetMuscleExercisesData = await fetchData(
          `${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,
          exerciseOptions
        );
        setTargetMuscleExercises(targetMuscleExercisesData);

        const equipmentExercisesData = await fetchData(
          `${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,
          exerciseOptions
        );
        setEquipmentExercises(equipmentExercisesData);
      } catch (error) {
        console.error("Error fetching exercise data:", error);
      }
    };

    fetchExercisesData();
  }, [id]);

  if (!exerciseDetail) return <div>No Data</div>;

  return (
    <div style={{ marginTop: "60px" }}>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetail.name}
      />
      <SimilarExercises
        targetMuscleExercises={targetMuscleExercises}
        equipmentExercises={equipmentExercises}
      />
    </div>
  );
};

export default ExerciseDetail;
