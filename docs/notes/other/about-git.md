---
title: Git 相关的一些东西
---

# Git 相关的一些东西

## 一些常用配置

配置文件：`~/.gitconfig`。

```bash
git config --global user.name "your name"
git config --global user.email "your email"
```

## 基本提交流程

```bash
# 添加文件到暂存区
git add file1 file2

# 提交暂存区到本地仓库
git commit -m "commit message"

# 推送本地仓库到远程仓库
git push origin master
```

## 远程仓库

```bash
# 克隆远程仓库
git clone <EMAIL>:username/repository.git

# 查看远程仓库
git remote -v

# 添加远程仓库
git remote add origin <EMAIL>:username/repository.git
# 删除远程仓库
git remote rm origin
# 修改远程仓库URL
git remote set-url origin <EMAIL>:username/repository.git

# 拉取远程仓库（允许不同版本合并）
git pull origin master --allow-unrelated-histories

# 推送本地仓库到远程仓库
git push -u origin master

# 强制推送本地仓库到远程仓库
git push -f origin master

# 查看历史提交记录
git log --oneline --graph
```

如果使用SSH协议，需要在本地生成密钥对，并且将公钥上传至远程仓库平台。

### 生成密钥对

```bash
# 在本地生成密钥对
ssh-keygen -t rsa -C "your email"

# 查看公钥
cat ~/.ssh/id_rsa.pub
```

### 删除远程分支

```bash
# 删除远程分支
git push origin --delete <branch_name>

# 删除本地分支
git branch -d <branch_name>
```

## 撤销操作

```bash
# 撤销暂存区
git reset HEAD file1 file2
# 或者
git restore --staged file1 file2

# 撤销本地修改（未暂存）
git checkout -- file1 file2
# 或者
git restore file1 file2

# 回到上一个版本（--hard参数会丢弃工作区的改动，慎用！！！）
git reset HEAD^
# 回到上上一个版本
git reset HEAD^^
# 回到指定版本
git reset <commit_id>

# 修改最后一次提交的注释
git commit --amend -m "new commit message"
```

## 分支管理

```bash
# 创建分支
git branch <branch_name>
# 创建并切换到分支
git checkout -b <branch_name>

# 切换分支
git checkout <branch_name>

# 查看分支
git branch

# 合并分支到当前分支
git merge <branch_name>

# 删除分支（-D参数强制删除）
git branch -d <branch_name>
```

## 标签管理

```bash
# 在当前节点创建标签
git tag <tag_name>
# 在指定节点创建标签
git tag <tag_name> <commit_id>
# 添加说明信息
git tag -a <tag_name> -m "tag message"

# 查看标签
git tag
# 查看标签信息
git show <tag_name>

# 推送标签到远程仓库
git push origin <tag_name>
# 推送所有标签到远程仓库
git push origin --tags

# 删除标签
git tag -d <tag_name>
# 删除远程标签
git push origin :refs/tags/<tag_name>

# 基于标签创建分支
git checkout -b <branch_name> <tag_name>
```

## 其他

### 忽略文件

对于已经被git管理的文件，需要删除缓存后才能忽略。

```bash
# 删除缓存
git rm -rf --cached file1 file2
```
