package com.jsp.action.utils;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import com.jsp.dto.AttachNoticeVO;

public class MakeFileName {

	public static String toUUIDFileName(String fileName, String delimiter) {
		String uuid = UUID.randomUUID().toString().replace("-", "");
		return uuid + delimiter + fileName;
	}

	public static String parseFileNameFromUUID(String fileName, String delimiter) {
		String[] uuidFileName = fileName.split(delimiter);
		return uuidFileName[uuidFileName.length - 1];
	}

	public static List<AttachNoticeVO> parseFileNameFromAttaches(List<AttachNoticeVO> attachList,
															String delimiter) {

		List<AttachNoticeVO> renamedAttachList = new ArrayList<AttachNoticeVO>();

		if (attachList != null) {
			for (AttachNoticeVO attach : attachList) {
				String fileName = attach.getAttachNoticefileName(); // DB상의 fileName
				fileName = parseFileNameFromUUID(fileName, delimiter); // uuid가 제거된
				// fileName
				attach.setAttachNoticefileName(fileName);

				renamedAttachList.add(attach);
			}
		}
		return renamedAttachList;
	}
}
