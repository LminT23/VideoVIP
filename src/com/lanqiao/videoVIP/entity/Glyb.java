package com.lanqiao.videoVIP.entity;

import java.io.Serializable;

public class Glyb implements Serializable{
	
	/**管理员账号 */
	private String glyzh;
	/**管理员密码 */
	private String glypwd;
	
	public Glyb() {
		super();
	}

	public Glyb(String glyzh, String glypwd) {
		super();
		this.glyzh = glyzh;
		this.glypwd = glypwd;
	}

	public String getGlyzh() {
		return glyzh;
	}

	public void setGlyzh(String glyzh) {
		this.glyzh = glyzh;
	}

	public String getGlypwd() {
		return glypwd;
	}

	public void setGlypwd(String glypwd) {
		this.glypwd = glypwd;
	}

	@Override
	public String toString() {
		return "Glyb [glyzh=" + glyzh + ", glypwd=" + glypwd + "]";
	}
}
