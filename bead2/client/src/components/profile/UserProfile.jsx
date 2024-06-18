import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../state/users/usersSlice";
import { PastExperiences } from "./PastExperiences";
import { useState } from "react";

export const UserProfile = () => {
  const user = useSelector(selectCurrentUser);
  const [isEditing, setIsEditing] = useState(false);

  const startEditing = () => {
    setIsEditing(true);
  };

  return (
    <div>
      <div className="flex place-content-end justify-between px-4 sm:px-0">
        <div className="flex flex-col justify-start text-left">
          <h3 className="text-base font-semibold leading-7 text-gray-900">
            Személyes adatok
          </h3>
          <p className="mt-1 text-sm leading-6 text-gray-500">
            Adataid és tapasztalataid egy helyen
          </p>
        </div>
        <button
          onClick={startEditing}
          className="h-11 w-48 self-end rounded border border-gray-500 bg-white px-4 py-2 text-xs font-bold text-gray-500 hover:bg-gray-500 hover:text-white"
        >
          Tapasztalatok szerkesztése
        </button>
      </div>

      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="bg-gray-50 px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Név</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {user.fullname}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              E-mail cím
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {user.email}
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Státusz
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {user.role}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Eddigi tapasztalatok
            </dt>
          </div>
            <PastExperiences isEditing={isEditing} setIsEditing={setIsEditing} />
        </dl>
      </div>
    </div>
  );
};
