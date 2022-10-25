import axios from "axios";

export const $ = document.querySelector.bind(document);
export const $$ = document.querySelectorAll.bind(document);

export const axiosClient = axios.create();

axiosClient.interceptors.response.use((response) => response.data);
