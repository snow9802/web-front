// src/API/group.js
import axiosInstance from './axiosInstance';

/**
 * 서버로 그룹 데이터를 요청하는 함수
 * @param {Object} options 요청 옵션 (카테고리, 페이지 번호, 페이지 크기, 검색어, 지역, 모집 중 여부 등)
 * @returns {Promise} 서버에서 반환된 데이터
 */
export const fetchGroups = async ({
  category = '전체',
  currentPage = 1,
  pageSize = 9,
  searchParam = '',
  loc = '',
  isActive = true,
}) => {
  // 경로 동적으로 설정
  // const path = `/group/${category}/${currentPage}/${pageSize}`;
  const path = `/group/${currentPage}/${pageSize}`;
  // 쿼리 매개변수 설정
  const params = {
    // searchParam: searchParam || undefined, // 검색어
    // loc: loc || undefined, // 지역
    isActive: isActive ? 'Y' : 'N', // 모집 중 여부
  };
  // 요청 보내기
  const response = await axiosInstance.get(path, { params });
  return response.data; // 데이터 반환
};

/**
 * 서버로 특정 그룹의 상세 데이터를 요청하는 함수
 * @param {string | number} groupId - 조회할 그룹의 ID
 * @returns {Promise} 서버에서 반환된 그룹 상세 데이터
 */
export const fetchGroupDetail = async (groupId) => {
  // 요청 경로 설정
  const path = `/group/detail/${groupId}`;
  
  try {
    // 요청 보내기
    const response = await axiosInstance.get(path);
    return response.data; // 데이터 반환
  } catch (error) {
    console.error(`Failed to fetch group detail for ID: ${groupId}`, error);
    throw error; // 에러 다시 던지기
  }
};

