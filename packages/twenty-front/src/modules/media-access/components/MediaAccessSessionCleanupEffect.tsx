import { mediaAccessSessionsState } from '@/media-access/states/mediaAccessSessionsState';
import { useSetAtomState } from '@/ui/utilities/state/jotai/hooks/useSetAtomState';
import { useEffect } from 'react';

export const MediaAccessSessionCleanupEffect = ({ id }: { id: string }) => {
  const setMediaAccessSessions = useSetAtomState(mediaAccessSessionsState);

  useEffect(
    () => () => {
      setMediaAccessSessions((sessions) =>
        sessions.filter((session) => session.id !== id),
      );
    },
    [id, setMediaAccessSessions],
  );

  return null;
};
