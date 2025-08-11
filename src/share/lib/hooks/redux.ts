import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux"
import type { RootState, AppDispatch } from "@/app/store/store"

// Типизированная версия useDispatch
export const useAppDispatch: () => AppDispatch = useDispatch

// Типизированная версия useSelector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
